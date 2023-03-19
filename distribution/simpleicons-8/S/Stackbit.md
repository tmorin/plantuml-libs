# Stackbit


```text
simpleicons-8/S/Stackbit
```

```text
include('simpleicons-8/S/Stackbit')
```



| Illustration | Stackbit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Stackbit.png) | ![illustration for Stackbit](../../simpleicons-8/S/Stackbit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StackbitXs>`
- `<$StackbitSm>`
- `<$StackbitMd>`
- `<$StackbitLg>`





## Stackbit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Stackbit
include('simpleicons-8/S/Stackbit')

' renders the element
Stackbit('Stackbit', 'Stackbit', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Stackbit
include('simpleicons-8/S/Stackbit')

' renders the element
Stackbit('Stackbit', 'Stackbit', 'an optional tech label', 'an optional description')
@enduml
```

