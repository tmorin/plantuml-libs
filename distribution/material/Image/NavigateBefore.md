# NavigateBefore


```text
material/Image/NavigateBefore
```

```text
include('material/Image/NavigateBefore')
```



| Illustration | NavigateBefore |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/NavigateBefore.png) | ![illustration for NavigateBefore](../../material/Image/NavigateBefore.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element NavigateBefore
include('material/Image/NavigateBefore')

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
include('material/bootstrap')

' loads the Item which embeds the element NavigateBefore
include('material/Image/NavigateBefore')

' renders the element
NavigateBefore('NavigateBefore', 'Navigate Before', 'an optional tech label', 'an optional description')
@enduml
```

