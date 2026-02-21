# Uphold


```text
simpleicons/U/Uphold
```

```text
include('simpleicons/U/Uphold')
```



| Illustration | Uphold |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/U/Uphold.png) | ![illustration for Uphold](../../simpleicons/U/Uphold.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UpholdXs>`
- `<$UpholdSm>`
- `<$UpholdMd>`
- `<$UpholdLg>`





## Uphold

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Uphold
include('simpleicons/U/Uphold')

' renders the element
Uphold('Uphold', 'Uphold', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Uphold
include('simpleicons/U/Uphold')

' renders the element
Uphold('Uphold', 'Uphold', 'an optional tech label', 'an optional description')
@enduml
```

