# PermMedia


```text
material/Action/PermMedia
```

```text
include('material/Action/PermMedia')
```



| Illustration | PermMedia |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/PermMedia.png) | ![illustration for PermMedia](../../material/Action/PermMedia.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PermMediaXs>`
- `<$PermMediaSm>`
- `<$PermMediaMd>`
- `<$PermMediaLg>`





## PermMedia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PermMedia
include('material/Action/PermMedia')

' renders the element
PermMedia('PermMedia', 'Perm Media', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PermMedia
include('material/Action/PermMedia')

' renders the element
PermMedia('PermMedia', 'Perm Media', 'an optional tech label', 'an optional description')
@enduml
```

