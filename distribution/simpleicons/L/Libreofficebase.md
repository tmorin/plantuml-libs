# Libreofficebase


```text
simpleicons/L/Libreofficebase
```

```text
include('simpleicons/L/Libreofficebase')
```



| Illustration | Libreofficebase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Libreofficebase.png) | ![illustration for Libreofficebase](../../simpleicons/L/Libreofficebase.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LibreofficebaseXs>`
- `<$LibreofficebaseSm>`
- `<$LibreofficebaseMd>`
- `<$LibreofficebaseLg>`





## Libreofficebase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Libreofficebase
include('simpleicons/L/Libreofficebase')

' renders the element
Libreofficebase('Libreofficebase', 'Libreofficebase', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Libreofficebase
include('simpleicons/L/Libreofficebase')

' renders the element
Libreofficebase('Libreofficebase', 'Libreofficebase', 'an optional tech label', 'an optional description')
@enduml
```

