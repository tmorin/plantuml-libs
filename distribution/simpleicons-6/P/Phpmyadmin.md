# Phpmyadmin


```text
simpleicons-6/P/Phpmyadmin
```

```text
include('simpleicons-6/P/Phpmyadmin')
```



| Illustration | Phpmyadmin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Phpmyadmin.png) | ![illustration for Phpmyadmin](../../simpleicons-6/P/Phpmyadmin.Local.png) |




## Phpmyadmin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Phpmyadmin
include('simpleicons-6/P/Phpmyadmin')

' renders the element
Phpmyadmin('Phpmyadmin', 'Phpmyadmin', 'an optional tech label')
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

' loads the Item which embeds the element Phpmyadmin
include('simpleicons-6/P/Phpmyadmin')

' renders the element
Phpmyadmin('Phpmyadmin', 'Phpmyadmin', 'an optional tech label')
@enduml
```

