# Airserbia


```text
simpleicons-14/A/Airserbia
```

```text
include('simpleicons-14/A/Airserbia')
```



| Illustration | Airserbia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Airserbia.png) | ![illustration for Airserbia](../../simpleicons-14/A/Airserbia.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AirserbiaXs>`
- `<$AirserbiaSm>`
- `<$AirserbiaMd>`
- `<$AirserbiaLg>`





## Airserbia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Airserbia
include('simpleicons-14/A/Airserbia')

' renders the element
Airserbia('Airserbia', 'Airserbia', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Airserbia
include('simpleicons-14/A/Airserbia')

' renders the element
Airserbia('Airserbia', 'Airserbia', 'an optional tech label', 'an optional description')
@enduml
```

