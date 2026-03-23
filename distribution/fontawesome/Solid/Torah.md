# Torah


```text
fontawesome/Solid/Torah
```

```text
include('fontawesome/Solid/Torah')
```



| Illustration | Torah |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Torah.png) | ![illustration for Torah](../../fontawesome/Solid/Torah.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TorahXs>`
- `<$TorahSm>`
- `<$TorahMd>`
- `<$TorahLg>`





## Torah

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Torah
include('fontawesome/Solid/Torah')

' renders the element
Torah('Torah', 'Torah', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Torah
include('fontawesome/Solid/Torah')

' renders the element
Torah('Torah', 'Torah', 'an optional tech label', 'an optional description')
@enduml
```

