# FileCopy


```text
material/Content/FileCopy
```

```text
include('material/Content/FileCopy')
```



| Illustration | FileCopy |
| :---: | :---: |
| ![illustration for Illustration](../../material/Content/FileCopy.png) | ![illustration for FileCopy](../../material/Content/FileCopy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FileCopyXs>`
- `<$FileCopySm>`
- `<$FileCopyMd>`
- `<$FileCopyLg>`





## FileCopy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FileCopy
include('material/Content/FileCopy')

' renders the element
FileCopy('FileCopy', 'File Copy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FileCopy
include('material/Content/FileCopy')

' renders the element
FileCopy('FileCopy', 'File Copy', 'an optional tech label', 'an optional description')
@enduml
```

