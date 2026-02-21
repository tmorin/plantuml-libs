# IdCard


```text
fontawesome/Solid/IdCard
```

```text
include('fontawesome/Solid/IdCard')
```



| Illustration | IdCard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/IdCard.png) | ![illustration for IdCard](../../fontawesome/Solid/IdCard.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IdCardXs>`
- `<$IdCardSm>`
- `<$IdCardMd>`
- `<$IdCardLg>`





## IdCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element IdCard
include('fontawesome/Solid/IdCard')

' renders the element
IdCard('IdCard', 'Id Card', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element IdCard
include('fontawesome/Solid/IdCard')

' renders the element
IdCard('IdCard', 'Id Card', 'an optional tech label', 'an optional description')
@enduml
```

