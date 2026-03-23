# HandsWash


```text
fontawesome/Solid/HandsWash
```

```text
include('fontawesome/Solid/HandsWash')
```



| Illustration | HandsWash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HandsWash.png) | ![illustration for HandsWash](../../fontawesome/Solid/HandsWash.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandsWashXs>`
- `<$HandsWashSm>`
- `<$HandsWashMd>`
- `<$HandsWashLg>`





## HandsWash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HandsWash
include('fontawesome/Solid/HandsWash')

' renders the element
HandsWash('HandsWash', 'Hands Wash', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandsWash
include('fontawesome/Solid/HandsWash')

' renders the element
HandsWash('HandsWash', 'Hands Wash', 'an optional tech label', 'an optional description')
@enduml
```

