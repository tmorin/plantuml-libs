# HomeFilled


```text
material/Action/HomeFilled
```

```text
include('material/Action/HomeFilled')
```



| Illustration | HomeFilled |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/HomeFilled.png) | ![illustration for HomeFilled](../../material/Action/HomeFilled.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HomeFilledXs>`
- `<$HomeFilledSm>`
- `<$HomeFilledMd>`
- `<$HomeFilledLg>`





## HomeFilled

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element HomeFilled
include('material/Action/HomeFilled')

' renders the element
HomeFilled('HomeFilled', 'Home Filled', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HomeFilled
include('material/Action/HomeFilled')

' renders the element
HomeFilled('HomeFilled', 'Home Filled', 'an optional tech label', 'an optional description')
@enduml
```

