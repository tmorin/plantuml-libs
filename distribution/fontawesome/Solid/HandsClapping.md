# HandsClapping


```text
fontawesome/Solid/HandsClapping
```

```text
include('fontawesome/Solid/HandsClapping')
```



| Illustration | HandsClapping |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HandsClapping.png) | ![illustration for HandsClapping](../../fontawesome/Solid/HandsClapping.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandsClappingXs>`
- `<$HandsClappingSm>`
- `<$HandsClappingMd>`
- `<$HandsClappingLg>`





## HandsClapping

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HandsClapping
include('fontawesome/Solid/HandsClapping')

' renders the element
HandsClapping('HandsClapping', 'Hands Clapping', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandsClapping
include('fontawesome/Solid/HandsClapping')

' renders the element
HandsClapping('HandsClapping', 'Hands Clapping', 'an optional tech label', 'an optional description')
@enduml
```

