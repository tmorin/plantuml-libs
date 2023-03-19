# Php


```text
simpleicons-8/P/Php
```

```text
include('simpleicons-8/P/Php')
```



| Illustration | Php |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Php.png) | ![illustration for Php](../../simpleicons-8/P/Php.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhpXs>`
- `<$PhpSm>`
- `<$PhpMd>`
- `<$PhpLg>`





## Php

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Php
include('simpleicons-8/P/Php')

' renders the element
Php('Php', 'Php', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Php
include('simpleicons-8/P/Php')

' renders the element
Php('Php', 'Php', 'an optional tech label', 'an optional description')
@enduml
```

