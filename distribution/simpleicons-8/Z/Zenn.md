# Zenn


```text
simpleicons-8/Z/Zenn
```

```text
include('simpleicons-8/Z/Zenn')
```



| Illustration | Zenn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/Z/Zenn.png) | ![illustration for Zenn](../../simpleicons-8/Z/Zenn.Local.png) |




## Zenn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Zenn
include('simpleicons-8/Z/Zenn')

' renders the element
Zenn('Zenn', 'Zenn', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Zenn
include('simpleicons-8/Z/Zenn')

' renders the element
Zenn('Zenn', 'Zenn', 'an optional tech label', 'an optional description')
@enduml
```

