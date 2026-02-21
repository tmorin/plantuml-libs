# Compare


```text
material/Image/Compare
```

```text
include('material/Image/Compare')
```



| Illustration | Compare |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/Compare.png) | ![illustration for Compare](../../material/Image/Compare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CompareXs>`
- `<$CompareSm>`
- `<$CompareMd>`
- `<$CompareLg>`





## Compare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Compare
include('material/Image/Compare')

' renders the element
Compare('Compare', 'Compare', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Compare
include('material/Image/Compare')

' renders the element
Compare('Compare', 'Compare', 'an optional tech label', 'an optional description')
@enduml
```

