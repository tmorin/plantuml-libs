# SaveAlt


```text
material/Content/SaveAlt
```

```text
include('material/Content/SaveAlt')
```



| Illustration | SaveAlt |
| :---: | :---: |
| ![illustration for Illustration](../../material/Content/SaveAlt.png) | ![illustration for SaveAlt](../../material/Content/SaveAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SaveAltXs>`
- `<$SaveAltSm>`
- `<$SaveAltMd>`
- `<$SaveAltLg>`





## SaveAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SaveAlt
include('material/Content/SaveAlt')

' renders the element
SaveAlt('SaveAlt', 'Save Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SaveAlt
include('material/Content/SaveAlt')

' renders the element
SaveAlt('SaveAlt', 'Save Alt', 'an optional tech label', 'an optional description')
@enduml
```

