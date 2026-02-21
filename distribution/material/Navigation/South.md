# South


```text
material/Navigation/South
```

```text
include('material/Navigation/South')
```



| Illustration | South |
| :---: | :---: |
| ![illustration for Illustration](../../material/Navigation/South.png) | ![illustration for South](../../material/Navigation/South.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SouthXs>`
- `<$SouthSm>`
- `<$SouthMd>`
- `<$SouthLg>`





## South

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element South
include('material/Navigation/South')

' renders the element
South('South', 'South', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element South
include('material/Navigation/South')

' renders the element
South('South', 'South', 'an optional tech label', 'an optional description')
@enduml
```

