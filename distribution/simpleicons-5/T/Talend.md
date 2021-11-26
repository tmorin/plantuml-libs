# Talend


```text
simpleicons-5/T/Talend
```

```text
include('simpleicons-5/T/Talend')
```



| Illustration | Talend |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Talend.png) | ![illustration for Talend](../../simpleicons-5/T/Talend.Local.png) |




## Talend

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Talend
include('simpleicons-5/T/Talend')

' renders the element
Talend('Talend', 'Talend', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Talend
include('simpleicons-5/T/Talend')

' renders the element
Talend('Talend', 'Talend', 'an optional tech label')
@enduml
```

