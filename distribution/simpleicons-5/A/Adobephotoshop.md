# Adobephotoshop


```text
simpleicons-5/A/Adobephotoshop
```

```text
include('simpleicons-5/A/Adobephotoshop')
```



| Illustration | Adobephotoshop |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Adobephotoshop.png) | ![illustration for Adobephotoshop](../../simpleicons-5/A/Adobephotoshop.Local.png) |




## Adobephotoshop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Adobephotoshop
include('simpleicons-5/A/Adobephotoshop')

' renders the element
Adobephotoshop('Adobephotoshop', 'Adobephotoshop', 'an optional tech label')
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

' loads the Item which embeds the element Adobephotoshop
include('simpleicons-5/A/Adobephotoshop')

' renders the element
Adobephotoshop('Adobephotoshop', 'Adobephotoshop', 'an optional tech label')
@enduml
```

