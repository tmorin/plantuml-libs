# Zenn


```text
simpleicons-5/Z/Zenn
```

```text
include('simpleicons-5/Z/Zenn')
```



| Illustration | Zenn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/Z/Zenn.png) | ![illustration for Zenn](../../simpleicons-5/Z/Zenn.Local.png) |




## Zenn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Zenn
include('simpleicons-5/Z/Zenn')

' renders the element
Zenn('Zenn', 'Zenn', 'an optional tech label')
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

' loads the Item which embeds the element Zenn
include('simpleicons-5/Z/Zenn')

' renders the element
Zenn('Zenn', 'Zenn', 'an optional tech label')
@enduml
```

