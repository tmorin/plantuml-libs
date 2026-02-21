# Mercury


```text
fontawesome/Solid/Mercury
```

```text
include('fontawesome/Solid/Mercury')
```



| Illustration | Mercury |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Mercury.png) | ![illustration for Mercury](../../fontawesome/Solid/Mercury.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MercuryXs>`
- `<$MercurySm>`
- `<$MercuryMd>`
- `<$MercuryLg>`





## Mercury

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Mercury
include('fontawesome/Solid/Mercury')

' renders the element
Mercury('Mercury', 'Mercury', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mercury
include('fontawesome/Solid/Mercury')

' renders the element
Mercury('Mercury', 'Mercury', 'an optional tech label', 'an optional description')
@enduml
```

