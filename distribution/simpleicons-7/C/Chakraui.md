# Chakraui


```text
simpleicons-7/C/Chakraui
```

```text
include('simpleicons-7/C/Chakraui')
```



| Illustration | Chakraui |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Chakraui.png) | ![illustration for Chakraui](../../simpleicons-7/C/Chakraui.Local.png) |




## Chakraui

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Chakraui
include('simpleicons-7/C/Chakraui')

' renders the element
Chakraui('Chakraui', 'Chakraui', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Chakraui
include('simpleicons-7/C/Chakraui')

' renders the element
Chakraui('Chakraui', 'Chakraui', 'an optional tech label', 'an optional description')
@enduml
```

