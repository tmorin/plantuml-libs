# Talend


```text
simpleicons-7/T/Talend
```

```text
include('simpleicons-7/T/Talend')
```



| Illustration | Talend |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Talend.png) | ![illustration for Talend](../../simpleicons-7/T/Talend.Local.png) |




## Talend

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Talend
include('simpleicons-7/T/Talend')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Talend
include('simpleicons-7/T/Talend')

' renders the element
Talend('Talend', 'Talend', 'an optional tech label')
@enduml
```

