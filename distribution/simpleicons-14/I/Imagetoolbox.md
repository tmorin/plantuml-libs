# Imagetoolbox


```text
simpleicons-14/I/Imagetoolbox
```

```text
include('simpleicons-14/I/Imagetoolbox')
```



| Illustration | Imagetoolbox |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/I/Imagetoolbox.png) | ![illustration for Imagetoolbox](../../simpleicons-14/I/Imagetoolbox.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ImagetoolboxXs>`
- `<$ImagetoolboxSm>`
- `<$ImagetoolboxMd>`
- `<$ImagetoolboxLg>`





## Imagetoolbox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Imagetoolbox
include('simpleicons-14/I/Imagetoolbox')

' renders the element
Imagetoolbox('Imagetoolbox', 'Imagetoolbox', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Imagetoolbox
include('simpleicons-14/I/Imagetoolbox')

' renders the element
Imagetoolbox('Imagetoolbox', 'Imagetoolbox', 'an optional tech label', 'an optional description')
@enduml
```

