# Umbrella


```text
fontawesome-6/Solid/Umbrella
```

```text
include('fontawesome-6/Solid/Umbrella')
```



| Illustration | Umbrella |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Umbrella.png) | ![illustration for Umbrella](../../fontawesome-6/Solid/Umbrella.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UmbrellaXs>`
- `<$UmbrellaSm>`
- `<$UmbrellaMd>`
- `<$UmbrellaLg>`





## Umbrella

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Umbrella
include('fontawesome-6/Solid/Umbrella')

' renders the element
Umbrella('Umbrella', 'Umbrella', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Umbrella
include('fontawesome-6/Solid/Umbrella')

' renders the element
Umbrella('Umbrella', 'Umbrella', 'an optional tech label', 'an optional description')
@enduml
```

