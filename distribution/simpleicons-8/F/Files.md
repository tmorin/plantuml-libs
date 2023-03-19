# Files


```text
simpleicons-8/F/Files
```

```text
include('simpleicons-8/F/Files')
```



| Illustration | Files |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/F/Files.png) | ![illustration for Files](../../simpleicons-8/F/Files.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FilesXs>`
- `<$FilesSm>`
- `<$FilesMd>`
- `<$FilesLg>`





## Files

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Files
include('simpleicons-8/F/Files')

' renders the element
Files('Files', 'Files', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Files
include('simpleicons-8/F/Files')

' renders the element
Files('Files', 'Files', 'an optional tech label', 'an optional description')
@enduml
```

