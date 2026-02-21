# Element


```text
simpleicons/E/Element
```

```text
include('simpleicons/E/Element')
```



| Illustration | Element |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/E/Element.png) | ![illustration for Element](../../simpleicons/E/Element.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ElementXs>`
- `<$ElementSm>`
- `<$ElementMd>`
- `<$ElementLg>`





## Element

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Element
include('simpleicons/E/Element')

' renders the element
Element('Element', 'Element', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Element
include('simpleicons/E/Element')

' renders the element
Element('Element', 'Element', 'an optional tech label', 'an optional description')
@enduml
```

