# Phpmyadmin


```text
simpleicons/P/Phpmyadmin
```

```text
include('simpleicons/P/Phpmyadmin')
```



| Illustration | Phpmyadmin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Phpmyadmin.png) | ![illustration for Phpmyadmin](../../simpleicons/P/Phpmyadmin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhpmyadminXs>`
- `<$PhpmyadminSm>`
- `<$PhpmyadminMd>`
- `<$PhpmyadminLg>`





## Phpmyadmin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Phpmyadmin
include('simpleicons/P/Phpmyadmin')

' renders the element
Phpmyadmin('Phpmyadmin', 'Phpmyadmin', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Phpmyadmin
include('simpleicons/P/Phpmyadmin')

' renders the element
Phpmyadmin('Phpmyadmin', 'Phpmyadmin', 'an optional tech label', 'an optional description')
@enduml
```

