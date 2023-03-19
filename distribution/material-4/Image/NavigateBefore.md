# NavigateBefore


```text
material-4/Image/NavigateBefore
```

```text
include('material-4/Image/NavigateBefore')
```



| Illustration | NavigateBefore |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/NavigateBefore.png) | ![illustration for NavigateBefore](../../material-4/Image/NavigateBefore.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NavigateBeforeXs>`
- `<$NavigateBeforeSm>`
- `<$NavigateBeforeMd>`
- `<$NavigateBeforeLg>`





## NavigateBefore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element NavigateBefore
include('material-4/Image/NavigateBefore')

' renders the element
NavigateBefore('NavigateBefore', 'Navigate Before', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element NavigateBefore
include('material-4/Image/NavigateBefore')

' renders the element
NavigateBefore('NavigateBefore', 'Navigate Before', 'an optional tech label', 'an optional description')
@enduml
```

