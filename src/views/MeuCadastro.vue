<template>
  <div class="MinhaConta">
    <v-row justify="center">
    <v-col
      cols="12"
      sm="8"
    >
      <v-card>
        <v-card-title class="black">
          <span class="#000000 white--text">Kaetano Rodrigues</span>

          <v-spacer></v-spacer>

          <v-btn
            dark
            icon
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>

          <v-btn
            dark
            icon
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-btn
            dark
            icon
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-card-title>

        <v-list>
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-phone</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>(15) 99853-1110 </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
          
            </v-list-item-action>
          </v-list-item>

          <v-divider inset></v-divider>

           

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-email</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>190157@facens.br</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-map-marker</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Sorocaba/SP</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

      </v-card>
    </v-col>
  </v-row>
  </div>
</template>
