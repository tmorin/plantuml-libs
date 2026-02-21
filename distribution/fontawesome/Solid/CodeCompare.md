# CodeCompare


```text
fontawesome/Solid/CodeCompare
```

```text
include('fontawesome/Solid/CodeCompare')
```



| Illustration | CodeCompare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CodeCompare.png) | ![illustration for CodeCompare](../../fontawesome/Solid/CodeCompare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CodeCompareXs>`
- `<$CodeCompareSm>`
- `<$CodeCompareMd>`
- `<$CodeCompareLg>`





## CodeCompare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CodeCompare
include('fontawesome/Solid/CodeCompare')

' renders the element
CodeCompare('CodeCompare', 'Code Compare', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CodeCompare
include('fontawesome/Solid/CodeCompare')

' renders the element
CodeCompare('CodeCompare', 'Code Compare', 'an optional tech label', 'an optional description')
@enduml
```

