# Undertale


```text
simpleicons-5/U/Undertale
```

```text
include('simpleicons-5/U/Undertale')
```



| Illustration | Undertale |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/U/Undertale.png) | ![illustration for Undertale](../../simpleicons-5/U/Undertale.Local.png) |




## Undertale

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Undertale
include('simpleicons-5/U/Undertale')

' renders the element
Undertale('Undertale', 'Undertale', 'an optional tech label')
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

' loads the Item which embeds the element Undertale
include('simpleicons-5/U/Undertale')

' renders the element
Undertale('Undertale', 'Undertale', 'an optional tech label')
@enduml
```

