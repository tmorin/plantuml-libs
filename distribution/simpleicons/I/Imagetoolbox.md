# Imagetoolbox


```text
simpleicons/I/Imagetoolbox
```

```text
include('simpleicons/I/Imagetoolbox')
```



| Illustration | Imagetoolbox |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/I/Imagetoolbox.png) | ![illustration for Imagetoolbox](../../simpleicons/I/Imagetoolbox.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Imagetoolbox
include('simpleicons/I/Imagetoolbox')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Imagetoolbox
include('simpleicons/I/Imagetoolbox')

' renders the element
Imagetoolbox('Imagetoolbox', 'Imagetoolbox', 'an optional tech label', 'an optional description')
@enduml
```

