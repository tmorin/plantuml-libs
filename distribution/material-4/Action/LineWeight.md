# LineWeight


```text
material-4/Action/LineWeight
```

```text
include('material-4/Action/LineWeight')
```



| Illustration | LineWeight |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/LineWeight.png) | ![illustration for LineWeight](../../material-4/Action/LineWeight.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LineWeightXs>`
- `<$LineWeightSm>`
- `<$LineWeightMd>`
- `<$LineWeightLg>`





## LineWeight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LineWeight
include('material-4/Action/LineWeight')

' renders the element
LineWeight('LineWeight', 'Line Weight', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element LineWeight
include('material-4/Action/LineWeight')

' renders the element
LineWeight('LineWeight', 'Line Weight', 'an optional tech label', 'an optional description')
@enduml
```

