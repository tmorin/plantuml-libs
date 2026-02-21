# Xml


```text
simpleicons-14/X/Xml
```

```text
include('simpleicons-14/X/Xml')
```



| Illustration | Xml |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/X/Xml.png) | ![illustration for Xml](../../simpleicons-14/X/Xml.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Xml
include('simpleicons-14/X/Xml')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Xml
include('simpleicons-14/X/Xml')

' renders the element
Xml('Xml', 'Xml', 'an optional tech label', 'an optional description')
@enduml
```

