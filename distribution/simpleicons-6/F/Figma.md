# Figma


```text
simpleicons-6/F/Figma
```

```text
include('simpleicons-6/F/Figma')
```



| Illustration | Figma |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/F/Figma.png) | ![illustration for Figma](../../simpleicons-6/F/Figma.Local.png) |




## Figma

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Figma
include('simpleicons-6/F/Figma')

' renders the element
Figma('Figma', 'Figma', 'an optional tech label')
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

' loads the Item which embeds the element Figma
include('simpleicons-6/F/Figma')

' renders the element
Figma('Figma', 'Figma', 'an optional tech label')
@enduml
```

