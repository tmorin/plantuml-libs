# Tqdm


```text
simpleicons-5/T/Tqdm
```

```text
include('simpleicons-5/T/Tqdm')
```



| Illustration | Tqdm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Tqdm.png) | ![illustration for Tqdm](../../simpleicons-5/T/Tqdm.Local.png) |




## Tqdm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Tqdm
include('simpleicons-5/T/Tqdm')

' renders the element
Tqdm('Tqdm', 'Tqdm', 'an optional tech label')
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

' loads the Item which embeds the element Tqdm
include('simpleicons-5/T/Tqdm')

' renders the element
Tqdm('Tqdm', 'Tqdm', 'an optional tech label')
@enduml
```

