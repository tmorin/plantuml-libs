# ChildCare


```text
material/Places/ChildCare
```

```text
include('material/Places/ChildCare')
```



| Illustration | ChildCare |
| :---: | :---: |
| ![illustration for Illustration](../../material/Places/ChildCare.png) | ![illustration for ChildCare](../../material/Places/ChildCare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChildCareXs>`
- `<$ChildCareSm>`
- `<$ChildCareMd>`
- `<$ChildCareLg>`





## ChildCare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ChildCare
include('material/Places/ChildCare')

' renders the element
ChildCare('ChildCare', 'Child Care', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element ChildCare
include('material/Places/ChildCare')

' renders the element
ChildCare('ChildCare', 'Child Care', 'an optional tech label', 'an optional description')
@enduml
```

