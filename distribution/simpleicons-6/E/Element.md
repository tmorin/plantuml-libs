# Element


```text
simpleicons-6/E/Element
```

```text
include('simpleicons-6/E/Element')
```



| Illustration | Element |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/E/Element.png) | ![illustration for Element](../../simpleicons-6/E/Element.Local.png) |




## Element

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Element
include('simpleicons-6/E/Element')

' renders the element
Element('Element', 'Element', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Element
include('simpleicons-6/E/Element')

' renders the element
Element('Element', 'Element', 'an optional tech label')
@enduml
```

