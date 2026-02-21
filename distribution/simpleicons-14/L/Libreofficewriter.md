# Libreofficewriter


```text
simpleicons-14/L/Libreofficewriter
```

```text
include('simpleicons-14/L/Libreofficewriter')
```



| Illustration | Libreofficewriter |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Libreofficewriter.png) | ![illustration for Libreofficewriter](../../simpleicons-14/L/Libreofficewriter.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LibreofficewriterXs>`
- `<$LibreofficewriterSm>`
- `<$LibreofficewriterMd>`
- `<$LibreofficewriterLg>`





## Libreofficewriter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Libreofficewriter
include('simpleicons-14/L/Libreofficewriter')

' renders the element
Libreofficewriter('Libreofficewriter', 'Libreofficewriter', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Libreofficewriter
include('simpleicons-14/L/Libreofficewriter')

' renders the element
Libreofficewriter('Libreofficewriter', 'Libreofficewriter', 'an optional tech label', 'an optional description')
@enduml
```

