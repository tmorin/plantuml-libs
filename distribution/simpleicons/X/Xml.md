# Xml


```text
simpleicons/X/Xml
```

```text
include('simpleicons/X/Xml')
```



| Illustration | Xml |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/X/Xml.png) | ![illustration for Xml](../../simpleicons/X/Xml.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$XmlXs>`
- `<$XmlSm>`
- `<$XmlMd>`
- `<$XmlLg>`





## Xml

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Xml
include('simpleicons/X/Xml')

' renders the element
Xml('Xml', 'Xml', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Xml
include('simpleicons/X/Xml')

' renders the element
Xml('Xml', 'Xml', 'an optional tech label', 'an optional description')
@enduml
```

