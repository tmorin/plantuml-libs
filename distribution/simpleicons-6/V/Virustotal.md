# Virustotal


```text
simpleicons-6/V/Virustotal
```

```text
include('simpleicons-6/V/Virustotal')
```



| Illustration | Virustotal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/V/Virustotal.png) | ![illustration for Virustotal](../../simpleicons-6/V/Virustotal.Local.png) |




## Virustotal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Virustotal
include('simpleicons-6/V/Virustotal')

' renders the element
Virustotal('Virustotal', 'Virustotal', 'an optional tech label')
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

' loads the Item which embeds the element Virustotal
include('simpleicons-6/V/Virustotal')

' renders the element
Virustotal('Virustotal', 'Virustotal', 'an optional tech label')
@enduml
```

