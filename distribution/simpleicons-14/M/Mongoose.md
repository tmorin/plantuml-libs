# Mongoose


```text
simpleicons-14/M/Mongoose
```

```text
include('simpleicons-14/M/Mongoose')
```



| Illustration | Mongoose |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Mongoose.png) | ![illustration for Mongoose](../../simpleicons-14/M/Mongoose.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MongooseXs>`
- `<$MongooseSm>`
- `<$MongooseMd>`
- `<$MongooseLg>`





## Mongoose

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mongoose
include('simpleicons-14/M/Mongoose')

' renders the element
Mongoose('Mongoose', 'Mongoose', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mongoose
include('simpleicons-14/M/Mongoose')

' renders the element
Mongoose('Mongoose', 'Mongoose', 'an optional tech label', 'an optional description')
@enduml
```

