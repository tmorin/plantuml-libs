# Php


```text
fontawesome-6/Brands/Php
```

```text
include('fontawesome-6/Brands/Php')
```



| Illustration | Php |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Php.png) | ![illustration for Php](../../fontawesome-6/Brands/Php.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Php
include('fontawesome-6/Brands/Php')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Php
include('fontawesome-6/Brands/Php')

' renders the element
Php('Php', 'Php', 'an optional tech label', 'an optional description')
@enduml
```

