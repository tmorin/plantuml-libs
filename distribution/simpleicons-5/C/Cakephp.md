# Cakephp


```text
simpleicons-5/C/Cakephp
```

```text
include('simpleicons-5/C/Cakephp')
```



| Illustration | Cakephp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Cakephp.png) | ![illustration for Cakephp](../../simpleicons-5/C/Cakephp.Local.png) |




## Cakephp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Cakephp
include('simpleicons-5/C/Cakephp')

' renders the element
Cakephp('Cakephp', 'Cakephp', 'an optional tech label')
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

' loads the Item which embeds the element Cakephp
include('simpleicons-5/C/Cakephp')

' renders the element
Cakephp('Cakephp', 'Cakephp', 'an optional tech label')
@enduml
```

