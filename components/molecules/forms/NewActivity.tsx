import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { Button, TextInput, Text } from "react-native-paper";
import { View } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";

export default function CreateNewActivity() {
  const schema = z.object({
    name: z.string().min(1, { message: "This field is required" }),
    likes: z.number(),
    description: z
      .string()
      .min(30, { message: "A minimum of 30 characters is required" }),
    weatherType: z.string(),
  });

  type Schema = z.infer<typeof schema>
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      likes: 0,
      description: "",
      weatherType: "",
    },
  });

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
    reset();
  };
  return (
    <View style={{ flex: 1, flexDirection: "column", gap: 10 }}>
      <View>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <TextInput
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              value={field.value}
              mode="outlined"
              placeholder="Enter activity name..."
            />
          )}
        />
        {errors.name && <Text style={{color: 'red'}}>{errors.name.message}.</Text>}
      </View>
      <View>
        <Controller
          control={control}
          name="description"
          render={({ field }) => (
            <TextInput
              multiline
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              value={field.value}
              mode="outlined"
              style={{ height: 140 }}
              placeholder="Enter activity description here..."
            />
          )}
        />
        {errors.description && <Text style={{color: 'red'}}>{errors.description.message}.</Text>}
      </View>

      <Button mode="contained" onPress={handleSubmit(onSubmit)}>
        Submit{" "}
      </Button>
    </View>
  );
}
