# Namecheap


```text
simpleicons-5/N/Namecheap
```

```text
include('simpleicons-5/N/Namecheap')
```



| Illustration | Namecheap |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/N/Namecheap.png) | ![illustration for Namecheap](../../simpleicons-5/N/Namecheap.Local.png) |




## Namecheap

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Namecheap
include('simpleicons-5/N/Namecheap')

' renders the element
Namecheap('Namecheap', 'Namecheap', 'an optional tech label')
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

' loads the Item which embeds the element Namecheap
include('simpleicons-5/N/Namecheap')

' renders the element
Namecheap('Namecheap', 'Namecheap', 'an optional tech label')
@enduml
```

