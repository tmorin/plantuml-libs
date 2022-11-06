# Googlehome


```text
simpleicons-7/G/Googlehome
```

```text
include('simpleicons-7/G/Googlehome')
```



| Illustration | Googlehome |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Googlehome.png) | ![illustration for Googlehome](../../simpleicons-7/G/Googlehome.Local.png) |




## Googlehome

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Googlehome
include('simpleicons-7/G/Googlehome')

' renders the element
Googlehome('Googlehome', 'Googlehome', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googlehome
include('simpleicons-7/G/Googlehome')

' renders the element
Googlehome('Googlehome', 'Googlehome', 'an optional tech label', 'an optional description')
@enduml
```

