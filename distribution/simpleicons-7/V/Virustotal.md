# Virustotal


```text
simpleicons-7/V/Virustotal
```

```text
include('simpleicons-7/V/Virustotal')
```



| Illustration | Virustotal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/V/Virustotal.png) | ![illustration for Virustotal](../../simpleicons-7/V/Virustotal.Local.png) |




## Virustotal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Virustotal
include('simpleicons-7/V/Virustotal')

' renders the element
Virustotal('Virustotal', 'Virustotal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Virustotal
include('simpleicons-7/V/Virustotal')

' renders the element
Virustotal('Virustotal', 'Virustotal', 'an optional tech label', 'an optional description')
@enduml
```

