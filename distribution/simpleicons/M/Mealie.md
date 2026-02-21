# Mealie


```text
simpleicons/M/Mealie
```

```text
include('simpleicons/M/Mealie')
```



| Illustration | Mealie |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Mealie.png) | ![illustration for Mealie](../../simpleicons/M/Mealie.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MealieXs>`
- `<$MealieSm>`
- `<$MealieMd>`
- `<$MealieLg>`





## Mealie

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Mealie
include('simpleicons/M/Mealie')

' renders the element
Mealie('Mealie', 'Mealie', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Mealie
include('simpleicons/M/Mealie')

' renders the element
Mealie('Mealie', 'Mealie', 'an optional tech label', 'an optional description')
@enduml
```

