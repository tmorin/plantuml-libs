# Agriculture


```text
material/Maps/Agriculture
```

```text
include('material/Maps/Agriculture')
```



| Illustration | Agriculture |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/Agriculture.png) | ![illustration for Agriculture](../../material/Maps/Agriculture.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AgricultureXs>`
- `<$AgricultureSm>`
- `<$AgricultureMd>`
- `<$AgricultureLg>`





## Agriculture

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Agriculture
include('material/Maps/Agriculture')

' renders the element
Agriculture('Agriculture', 'Agriculture', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Agriculture
include('material/Maps/Agriculture')

' renders the element
Agriculture('Agriculture', 'Agriculture', 'an optional tech label', 'an optional description')
@enduml
```

