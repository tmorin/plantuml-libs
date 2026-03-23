# Surprise


```text
fontawesome/Regular/Surprise
```

```text
include('fontawesome/Regular/Surprise')
```



| Illustration | Surprise |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/Surprise.png) | ![illustration for Surprise](../../fontawesome/Regular/Surprise.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SurpriseXs>`
- `<$SurpriseSm>`
- `<$SurpriseMd>`
- `<$SurpriseLg>`





## Surprise

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Surprise
include('fontawesome/Regular/Surprise')

' renders the element
Surprise('Surprise', 'Surprise', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Surprise
include('fontawesome/Regular/Surprise')

' renders the element
Surprise('Surprise', 'Surprise', 'an optional tech label', 'an optional description')
@enduml
```

