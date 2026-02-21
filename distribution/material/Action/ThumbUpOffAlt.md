# ThumbUpOffAlt


```text
material/Action/ThumbUpOffAlt
```

```text
include('material/Action/ThumbUpOffAlt')
```



| Illustration | ThumbUpOffAlt |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/ThumbUpOffAlt.png) | ![illustration for ThumbUpOffAlt](../../material/Action/ThumbUpOffAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThumbUpOffAltXs>`
- `<$ThumbUpOffAltSm>`
- `<$ThumbUpOffAltMd>`
- `<$ThumbUpOffAltLg>`





## ThumbUpOffAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ThumbUpOffAlt
include('material/Action/ThumbUpOffAlt')

' renders the element
ThumbUpOffAlt('ThumbUpOffAlt', 'Thumb Up Off Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ThumbUpOffAlt
include('material/Action/ThumbUpOffAlt')

' renders the element
ThumbUpOffAlt('ThumbUpOffAlt', 'Thumb Up Off Alt', 'an optional tech label', 'an optional description')
@enduml
```

